"use strict";
const Constants = require ("../../../Constants");
const EmperorCrocodileBase = require("../set8ED/EmperorCrocodile");

class EmperorCrocodile extends EmperorCrocodileBase {
  constructor (game) {
    super(game, "Emperor Crocodile", "Eternal Masters", "EMA");
  }
}

module.exports = EmperorCrocodile;
