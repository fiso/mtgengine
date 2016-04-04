"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scourgemark extends Card {
  constructor(game) {
    super(game, "Scourgemark", "Theros", "THS");
  }
}

module.exports = Scourgemark;
