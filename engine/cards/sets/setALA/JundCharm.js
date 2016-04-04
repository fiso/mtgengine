"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JundCharmBase = require("../setC13/JundCharm.js");

class JundCharm extends JundCharmBase {
  constructor(game) {
    super(game, "Jund Charm", "Shards of Alara", "ALA");
  }
}

module.exports = JundCharm;
