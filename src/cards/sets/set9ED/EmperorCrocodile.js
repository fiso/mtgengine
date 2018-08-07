"use strict";
const Constants = require ("../../../Constants");
const EmperorCrocodileBase = require("../setEMA/EmperorCrocodile");

class EmperorCrocodile extends EmperorCrocodileBase {
  constructor (game) {
    super(game, "Emperor Crocodile", "Ninth Edition", "9ED");
  }
}

module.exports = EmperorCrocodile;
