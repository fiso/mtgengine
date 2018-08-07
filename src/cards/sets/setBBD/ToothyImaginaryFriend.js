"use strict";
const Constants = require ("../../../Constants");
const ToothyImaginaryFriendBase = require("../setPBBD/ToothyImaginaryFriend");

class ToothyImaginaryFriend extends ToothyImaginaryFriendBase {
  constructor (game) {
    super(game, "Toothy, Imaginary Friend", "Battlebond", "BBD");
  }
}

module.exports = ToothyImaginaryFriend;
