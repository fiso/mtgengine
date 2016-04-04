"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinMimeBase = require("../setpARL/GoblinMime.js");

class GoblinMime extends GoblinMimeBase {
  constructor(game) {
    super(game, "Goblin Mime", "Unhinged", "UNH");
  }
}

module.exports = GoblinMime;
