"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkirkFireMarshalBase = require("../setDD3_EVG/SkirkFireMarshal.js");

class SkirkFireMarshal extends SkirkFireMarshalBase {
  constructor(game) {
    super(game, "Skirk Fire Marshal", "Onslaught", "ONS");
  }
}

module.exports = SkirkFireMarshal;
