"use strict";
const Constants = require ("../../../Constants");
const CripplingBlightBase = require("../setM15/CripplingBlight");

class CripplingBlight extends CripplingBlightBase {
  constructor (game) {
    super(game, "Crippling Blight", "Magic 2013", "M13");
  }
}

module.exports = CripplingBlight;
