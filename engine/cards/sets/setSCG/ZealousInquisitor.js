"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZealousInquisitorBase = require("../set9ED/ZealousInquisitor.js");

class ZealousInquisitor extends ZealousInquisitorBase {
  constructor(game) {
    super(game, "Zealous Inquisitor", "Scourge", "SCG");
  }
}

module.exports = ZealousInquisitor;
