"use strict";
const Constants = require ("../../../Constants");
const ImperiosaurBase = require("../setFUT/Imperiosaur");

class Imperiosaur extends ImperiosaurBase {
  constructor(game) {
    super(game, "Imperiosaur", "Modern Masters", "MMA");
  }
}

module.exports = Imperiosaur;
