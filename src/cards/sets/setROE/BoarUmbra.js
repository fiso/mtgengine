"use strict";
const Constants = require ("../../../Constants");
const BoarUmbraBase = require("../setPC2/BoarUmbra");

class BoarUmbra extends BoarUmbraBase {
  constructor (game) {
    super(game, "Boar Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BoarUmbra;
