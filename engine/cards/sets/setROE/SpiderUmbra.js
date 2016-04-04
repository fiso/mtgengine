"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiderUmbraBase = require("../setARC/SpiderUmbra.js");

class SpiderUmbra extends SpiderUmbraBase {
  constructor(game) {
    super(game, "Spider Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SpiderUmbra;
