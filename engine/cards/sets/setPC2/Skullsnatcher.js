"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkullsnatcherBase = require("../setBOK/Skullsnatcher.js");

class Skullsnatcher extends SkullsnatcherBase {
  constructor(game) {
    super(game, "Skullsnatcher", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Skullsnatcher;
