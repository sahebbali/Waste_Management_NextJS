import React from "react";

export default function ReportPage() {

    return (
        <div className="p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-gray-800">Report waste</h1>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg mb-12">
            <div className="mb-8">
              <label htmlFor="waste-image" className="block text-lg font-medium text-gray-700 mb-2">
                Upload Waste Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-green-500 transition-colors duration-300">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="waste-image"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500"
                    >
                      <span>Upload a file</span>
                      <input id="waste-image" name="waste-image" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            
            {preview && (
              <div className="mt-4 mb-8">
                <img src={preview} alt="Waste preview" className="max-w-full h-auto rounded-xl shadow-md" />
              </div>
            )}
            
            <Button 
              type="button" 
              onClick={handleVerify} 
              className="w-full mb-8 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl transition-colors duration-300" 
              disabled={!file || verificationStatus === 'verifying'}
            >
              {verificationStatus === 'verifying' ? (
                <>
                  <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Verifying...
                </>
              ) : 'Verify Waste'}
            </Button>
    
            {verificationStatus === 'success' && verificationResult && (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8 rounded-r-xl">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-medium text-green-800">Verification Successful</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>Waste Type: {verificationResult.wasteType}</p>
                      <p>Quantity: {verificationResult.quantity}</p>
                      <p>Confidence: {(verificationResult.confidence * 100).toFixed(2)}%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                {isLoaded ? (
                  <StandaloneSearchBox
                    onLoad={onLoad}
                    onPlacesChanged={onPlacesChanged}
                  >
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={newReport.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                      placeholder="Enter waste location"
                    />
                  </StandaloneSearchBox>
                ) : (
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newReport.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                    placeholder="Enter waste location"
                  />
                )}
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Waste Type</label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={newReport.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 bg-gray-100"
                  placeholder="Verified waste type"
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Estimated Amount</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={newReport.amount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 bg-gray-100"
                  placeholder="Verified amount"
                  readOnly
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-xl transition-colors duration-300 flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Submitting...
                </>
              ) : 'Submit Report'}
            </Button>
          </form>
    
       
        </div>
      )
}