"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyWishIsYourCommand extends UnimplementedCard {
  constructor(game) {
    super(game, "My Wish Is Your Command", "Archenemy", "ARC");
  }
}

module.exports = MyWishIsYourCommand;
