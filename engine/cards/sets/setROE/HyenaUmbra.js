"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HyenaUmbraBase = require("../setPC2/HyenaUmbra.js");

class HyenaUmbra extends HyenaUmbraBase {
  constructor(game) {
    super(game, "Hyena Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HyenaUmbra;
