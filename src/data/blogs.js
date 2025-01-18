export const blogs = [
    {
        id: "bert-optimization",
        title: "Optimizing BERT: A Journey to 70% Faster Inference",
        date: "March 20, 2024",
        category: "Performance",
        readTime: "8 min",
        preview: "Learn how we optimized BERT model inference through quantization...",
        content: `
  # Optimizing BERT for Production
  
  In this post, we'll explore how to optimize BERT models for production deployment.
  
  ## Implementation
  
  Here's how we implemented the optimization:
  
  \`\`\`python
  import torch
  from transformers import BertModel, BertTokenizer
  
  def optimize_bert_model(model):
      # Quantize the model
      quantized_model = torch.quantization.quantize_dynamic(
          model,  # the original model
          {torch.nn.Linear},  # a set of layers to quantize
          dtype=torch.qint8  # the target dtype for quantized weights
      )
      
      return quantized_model
  
  # Load model
  model = BertModel.from_pretrained('bert-base-uncased')
  
  # Optimize it
  optimized_model = optimize_bert_model(model)
  \`\`\`
  
  ## Results
  
  After optimization, we achieved significant performance improvements...
  
  Here's our JavaScript implementation:
  
  \`\`\`javascript
  const processModel = async () => {
      const model = await loadBertModel();
      const optimized = await quantizeModel(model);
      console.log("Optimization complete");
  }
  \`\`\`
      `
    },
    {
        id: "computer-vision-basics",
        title: "Getting Started with Computer Vision",
        date: "March 18, 2024",
        category: "Computer Vision",
        readTime: "5 min",
        preview: "A beginner's guide to understanding computer vision fundamentals...",
        content: `
  # Introduction to Computer Vision
  
  Let's explore the basics of computer vision with Python and OpenCV:
  
  \`\`\`python
  import cv2
  import numpy as np
  
  # Load and display an image
  img = cv2.imread('image.jpg')
  cv2.imshow('Image', img)
  
  # Basic image processing
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  blur = cv2.GaussianBlur(gray, (5,5), 0)
  edges = cv2.Canny(blur, 100, 200)
  \`\`\`
  
  ## Key Concepts
  
  1. Image preprocessing
  2. Feature detection
  3. Object recognition
      `
    }
];