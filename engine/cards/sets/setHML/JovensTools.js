"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JovensToolsBase = require("../set5ED/JovensTools.js");

class JovensTools extends JovensToolsBase {
  constructor(game) {
    super(game, "Joven's Tools", "Homelands", "HML");
  }
}

module.exports = JovensTools;
