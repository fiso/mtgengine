"use strict";
const Constants = require ("../../../Constants");
const EmperorCrocodileBase = require("../set8ED/EmperorCrocodile");

class EmperorCrocodile extends EmperorCrocodileBase {
  constructor(game) {
    super(game, "Emperor Crocodile", "Urza's Destiny", "UDS");
  }
}

module.exports = EmperorCrocodile;
