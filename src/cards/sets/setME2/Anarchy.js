"use strict";
const Constants = require ("../../../Constants");
const AnarchyBase = require("../setICE/Anarchy");

class Anarchy extends AnarchyBase {
  constructor(game) {
    super(game, "Anarchy", "Masters Edition II", "ME2");
  }
}

module.exports = Anarchy;
