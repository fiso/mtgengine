"use strict";
const Constants = require ("../../../Constants");
const ÆthersnipeBase = require("../setDD3_JVC/Æthersnipe");

class Æthersnipe extends ÆthersnipeBase {
  constructor(game) {
    super(game, "Æthersnipe", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Æthersnipe;
