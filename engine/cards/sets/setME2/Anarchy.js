"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnarchyBase = require("../setICE/Anarchy.js");

class Anarchy extends AnarchyBase {
  constructor(game) {
    super(game, "Anarchy", "Masters Edition II", "ME2");
  }
}

module.exports = Anarchy;
