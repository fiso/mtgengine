"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScragnothBase = require("../setpFNM/Scragnoth.js");

class Scragnoth extends ScragnothBase {
  constructor(game) {
    super(game, "Scragnoth", "Tempest", "TMP");
  }
}

module.exports = Scragnoth;
