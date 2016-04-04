"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OjutaisCommandBase = require("../setDTK/OjutaisCommand.js");

class OjutaisCommand extends OjutaisCommandBase {
  constructor(game) {
    super(game, "Ojutai's Command", "Media Inserts", "pMEI");
  }
}

module.exports = OjutaisCommand;
