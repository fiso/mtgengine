"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ImperiosaurBase = require("../setFUT/Imperiosaur.js");

class Imperiosaur extends ImperiosaurBase {
  constructor(game) {
    super(game, "Imperiosaur", "Modern Masters", "MMA");
  }
}

module.exports = Imperiosaur;
