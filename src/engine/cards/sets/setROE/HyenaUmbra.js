"use strict";
const Constants = require ("../../../Constants");
const HyenaUmbraBase = require("../setPCA/HyenaUmbra");

class HyenaUmbra extends HyenaUmbraBase {
  constructor (game) {
    super(game, "Hyena Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HyenaUmbra;
