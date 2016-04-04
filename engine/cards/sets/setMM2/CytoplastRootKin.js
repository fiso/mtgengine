"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CytoplastRootKinBase = require("../setDIS/CytoplastRootKin.js");

class CytoplastRootKin extends CytoplastRootKinBase {
  constructor(game) {
    super(game, "Cytoplast Root-Kin", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CytoplastRootKin;
