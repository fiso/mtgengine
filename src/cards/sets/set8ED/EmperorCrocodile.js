"use strict";
const Constants = require ("../../../Constants");
const EmperorCrocodileBase = require("../setEMA/EmperorCrocodile");

class EmperorCrocodile extends EmperorCrocodileBase {
  constructor (game) {
    super(game, "Emperor Crocodile", "Eighth Edition", "8ED");
  }
}

module.exports = EmperorCrocodile;
