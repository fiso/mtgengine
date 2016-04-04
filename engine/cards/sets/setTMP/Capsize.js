"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CapsizeBase = require("../setpFNM/Capsize.js");

class Capsize extends CapsizeBase {
  constructor(game) {
    super(game, "Capsize", "Tempest", "TMP");
  }
}

module.exports = Capsize;
