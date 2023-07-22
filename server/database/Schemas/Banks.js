const banksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    seoName: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        default: Math.floor(Math.random() * Date.now()).toString(36),
        unique: true
    },
    atmCount: {
        type: Number,
        default: 0
    },
    branchCount: {
        type: Number,
        default: 0
    },
    workplaceCount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    },
    logoUri: {
        type: String,
        default: ''
    },
    houseLoans: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'houseLoans'
        }
    ],
}, { versionKey: false });

module.exports = mongoose.model('banks', banksSchema);