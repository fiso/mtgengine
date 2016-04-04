"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YourWillIsNotYourOwn extends Card {
  constructor(game) {
    super(game, "Your Will Is Not Your Own", "Archenemy", "ARC");
  }
}

module.exports = YourWillIsNotYourOwn;
