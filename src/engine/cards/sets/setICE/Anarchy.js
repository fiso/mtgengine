"use strict";
const Constants = require ("../../../Constants");
const AnarchyBase = require("../setME2/Anarchy");

class Anarchy extends AnarchyBase {
  constructor (game) {
    super(game, "Anarchy", "Ice Age", "ICE");
  }
}

module.exports = Anarchy;
