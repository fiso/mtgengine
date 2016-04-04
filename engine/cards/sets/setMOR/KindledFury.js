"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KindledFuryBase = require("../setDTK/KindledFury.js");

class KindledFury extends KindledFuryBase {
  constructor(game) {
    super(game, "Kindled Fury", "Morningtide", "MOR");
  }
}

module.exports = KindledFury;
