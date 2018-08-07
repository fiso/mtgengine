"use strict";
const Constants = require ("../../../Constants");
const MammothUmbraBase = require("../setPCA/MammothUmbra");

class MammothUmbra extends MammothUmbraBase {
  constructor (game) {
    super(game, "Mammoth Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MammothUmbra;
