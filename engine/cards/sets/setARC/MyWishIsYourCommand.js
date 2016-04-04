"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyWishIsYourCommand extends Card {
  constructor(game) {
    super(game, "My Wish Is Your Command", "Archenemy", "ARC");
  }
}

module.exports = MyWishIsYourCommand;
