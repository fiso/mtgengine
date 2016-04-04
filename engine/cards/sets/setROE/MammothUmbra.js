"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MammothUmbraBase = require("../setPC2/MammothUmbra.js");

class MammothUmbra extends MammothUmbraBase {
  constructor(game) {
    super(game, "Mammoth Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MammothUmbra;
