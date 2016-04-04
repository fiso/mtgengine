"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmperorCrocodileBase = require("../set8ED/EmperorCrocodile.js");

class EmperorCrocodile extends EmperorCrocodileBase {
  constructor(game) {
    super(game, "Emperor Crocodile", "Urza's Destiny", "UDS");
  }
}

module.exports = EmperorCrocodile;
