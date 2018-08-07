"use strict";
const Constants = require ("../../../Constants");
const GrimgrinCorpseBornBase = require("../setOCM1/GrimgrinCorpseBorn");

class GrimgrinCorpseBorn extends GrimgrinCorpseBornBase {
  constructor (game) {
    super(game, "Grimgrin, Corpse-Born", "Innistrad", "ISD");
  }
}

module.exports = GrimgrinCorpseBorn;
