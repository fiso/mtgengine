"use strict";
const Constants = require ("../../../Constants");
const WellwisherBase = require("../setCMA/Wellwisher");

class Wellwisher extends WellwisherBase {
  constructor (game) {
    super(game, "Wellwisher", "Commander 2014", "C14");
  }
}

module.exports = Wellwisher;
