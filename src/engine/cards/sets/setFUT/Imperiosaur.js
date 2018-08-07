"use strict";
const Constants = require ("../../../Constants");
const ImperiosaurBase = require("../setMMA/Imperiosaur");

class Imperiosaur extends ImperiosaurBase {
  constructor (game) {
    super(game, "Imperiosaur", "Future Sight", "FUT");
  }
}

module.exports = Imperiosaur;
