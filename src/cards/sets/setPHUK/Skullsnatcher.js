"use strict";
const Constants = require ("../../../Constants");
const SkullsnatcherBase = require("../setPCA/Skullsnatcher");

class Skullsnatcher extends SkullsnatcherBase {
  constructor (game) {
    super(game, "Skullsnatcher", "Hachette UK", "PHUK");
  }
}

module.exports = Skullsnatcher;
