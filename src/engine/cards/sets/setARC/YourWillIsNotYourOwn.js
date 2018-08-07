"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YourWillIsNotYourOwn extends UnimplementedCard {
  constructor (game) {
    super(game, "Your Will Is Not Your Own", "Archenemy", "ARC");
  }
}

module.exports = YourWillIsNotYourOwn;
