// example feature
class FriendsList {
  friends = [];

  addFriend(friend) {
    this.friends.push(friend);
    this.announceFriendship(friend);
  }

  announceFriendship(friend) {
    global.console.log(`${friend} is now a friend`);
  }

  removeFriend(friend) {
    const idx = this.friends.indexOf(friend);
    if (idx === -1) {
      throw new Error(`Friend ${friend} not found to be removed`);
    }
    this.friends.splice(idx, 1);
  }
}

// tests
describe("FriendsList", () => {
  let friendsList;
  let friend;

  beforeEach(() => {
    friendsList = new FriendsList();
    friend = "Virat Kohli";
  });

  it("initializes friends list", () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  describe("addFriend", () => {
    it("adds a friend to the list", () => {
      friendsList.addFriend("Virat Kohli");
      expect(friendsList.friends.length).toEqual(1);
    });

    it("announces friendship", () => {
      friendsList.announceFriendship = jest.fn();
      expect(friendsList.announceFriendship).not.toHaveBeenCalled();
      friendsList.addFriend(friend);
      expect(friendsList.announceFriendship).toHaveBeenCalledWith(friend);
    });
  });

  describe("removeFriend", () => {
    it("removes a friend from the list", () => {
      friendsList.addFriend(friend);
      expect(friendsList.friends[0]).toEqual(friend);
      friendsList.removeFriend(friend);
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it("throws an error as friend does not exist in the list", () => {
      expect(() => friendsList.removeFriend(friend)).toThrow(
        new Error(`Friend ${friend} not found to be removed`),
      );
    });
  });
});
