"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PythonBase = require("../set6ED/Python.js");

class Python extends PythonBase {
  constructor(game) {
    super(game, "Python", "Starter 2000", "S00");
  }
}

module.exports = Python;
