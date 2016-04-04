"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YoseitheMorningStar extends Card {
  constructor(game) {
    super(game, "Yosei, the Morning Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = YoseitheMorningStar;
