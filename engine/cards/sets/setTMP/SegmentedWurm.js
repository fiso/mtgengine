"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SegmentedWurmBase = require("../setBTD/SegmentedWurm.js");

class SegmentedWurm extends SegmentedWurmBase {
  constructor(game) {
    super(game, "Segmented Wurm", "Tempest", "TMP");
  }
}

module.exports = SegmentedWurm;
