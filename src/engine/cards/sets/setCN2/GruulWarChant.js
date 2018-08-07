"use strict";
const Constants = require ("../../../Constants");
const GruulWarChantBase = require("../setMM3/GruulWarChant");

class GruulWarChant extends GruulWarChantBase {
  constructor (game) {
    super(game, "Gruul War Chant", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GruulWarChant;
