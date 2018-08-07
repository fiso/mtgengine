"use strict";
const Constants = require ("../../../Constants");
const LotusPetalBase = require("../setMPS/LotusPetal");

class LotusPetal extends LotusPetalBase {
  constructor (game) {
    super(game, "Lotus Petal", "Tempest", "TMP");
  }
}

module.exports = LotusPetal;
