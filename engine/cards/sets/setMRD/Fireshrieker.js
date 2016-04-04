"use strict";
const Constants = require ("../../../Constants");
const FireshriekerBase = require("../setM14/Fireshrieker");

class Fireshrieker extends FireshriekerBase {
  constructor(game) {
    super(game, "Fireshrieker", "Mirrodin", "MRD");
  }
}

module.exports = Fireshrieker;
