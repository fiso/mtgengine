"use strict";
const Constants = require ("../../../Constants");
const SkirkFireMarshalBase = require("../setEVG/SkirkFireMarshal");

class SkirkFireMarshal extends SkirkFireMarshalBase {
  constructor (game) {
    super(game, "Skirk Fire Marshal", "Onslaught", "ONS");
  }
}

module.exports = SkirkFireMarshal;
