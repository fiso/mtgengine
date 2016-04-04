"use strict";
const Constants = require ("../../../Constants");
const SkitterofLizardsBase = require("../setCNS/SkitterofLizards");

class SkitterofLizards extends SkitterofLizardsBase {
  constructor(game) {
    super(game, "Skitter of Lizards", "Worldwake", "WWK");
  }
}

module.exports = SkitterofLizards;
