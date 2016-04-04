"use strict";
const Constants = require ("../../../Constants");
const WellwisherBase = require("../setC14/Wellwisher");

class Wellwisher extends WellwisherBase {
  constructor(game) {
    super(game, "Wellwisher", "Onslaught", "ONS");
  }
}

module.exports = Wellwisher;
