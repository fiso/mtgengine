"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkitterofLizardsBase = require("../setCNS/SkitterofLizards.js");

class SkitterofLizards extends SkitterofLizardsBase {
  constructor(game) {
    super(game, "Skitter of Lizards", "Worldwake", "WWK");
  }
}

module.exports = SkitterofLizards;
