"use strict";
const Constants = require ("../../../Constants");
const CripplingBlightBase = require("../setM13/CripplingBlight");

class CripplingBlight extends CripplingBlightBase {
  constructor (game) {
    super(game, "Crippling Blight", "Magic 2015 Core Set", "M15");
  }
}

module.exports = CripplingBlight;
