"use strict";
const Constants = require ("../../../Constants");
const SummitProwlerBase = require("../setDTK/SummitProwler");

class SummitProwler extends SummitProwlerBase {
  constructor(game) {
    super(game, "Summit Prowler", "Khans of Tarkir", "KTK");
  }
}

module.exports = SummitProwler;
